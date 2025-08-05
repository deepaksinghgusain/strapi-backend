module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/category/getExcelData/:id',
            handler: 'category.getExcelData',
            config: {
                auth: false,
                policies: [
                    'api::category.is-admin',
                ],
            }
        }
    ],

}
