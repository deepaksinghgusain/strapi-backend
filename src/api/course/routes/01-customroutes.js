module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/course/getExcelData/:id',
            handler: 'course.getExcelData',
            config: {
                auth: false,
                policies: [
                    'api::course.is-admin',
                ],
            }
        }
    ],

}
