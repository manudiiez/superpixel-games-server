module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/get-preference',
            handler: 'order.getPreference',
        },
        {
            method: 'POST',
            path: '/post-comments',
            handler: 'order.postComentarios',
        }

    ]
}