'use strict';

/**
 *  review-exam controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const axios = require("axios");
module.exports = createCoreController('api::review-exam.review-exam' , ({strapi})=>({
    async getDataFromMux(ctx){
        const {uploadId} = ctx.request.params;
        //Mux credential
        const requestObject = {
            auth:{
                username:process.env.MUX_BASIC_AUTH_ID,
                password:process.env.MUX_BASIC_AUTH_PASSWORD,
            }
        }
        //axios get request to getting the video_id 
        const uploadResponse = await axios.get(process.env.MUX_API_GET_UPLOAD_ID + uploadId,requestObject);
        if(uploadResponse){
            const video_id = `asset_id:${uploadResponse.data.data[0].id}`
            const viewer_user_id = `viewer_user_id:${ctx.state.user.id}`  // ctx.state.user.id
            
            //get the video view ID.
            const videoResponse = await axios.get(`${process.env.MUX_API_GET_VIDEO_ID}${video_id}&filters[]=${viewer_user_id}&order_direction=desc` ,requestObject);

            if(videoResponse){
                if(!videoResponse.data?.total_row_count){
                    return ctx.badRequest("No views found of this video")
                }
                const video_viewResponse = await axios.get(process.env.MUX_API_GET_VIDEO_VIEWS + videoResponse.data?.data[0]?.id,requestObject)
                if(video_viewResponse){
                    const result = video_viewResponse.data.data.events.find(
                        (events) => events.name === "viewend"
                    );
                    if(result){
                        return { 
                            totalLengthOfVideo:video_viewResponse.data.data.player_source_duration,
                            videoViewEnd:result.playback_time,
                        }
                    }else{
                        const result1 = video_viewResponse.data.data.events.find(
                            (events) => events.name === "viewdropped"
                        );
                        return { 
                            totalLengthOfVideo:video_viewResponse.data.data.player_source_duration,
                            videoViewDropped:result1.playback_time,
                        }
                    }
                }
            }
        }
    },  
    
}));
