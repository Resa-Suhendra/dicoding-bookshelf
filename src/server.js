const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    try {
        const server = Hapi.server({
            port: 9000,
            host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
            routes: {
                cors: {
                    origin: ['*'],
                },
            },
        });

        server.route(routes);

        await server.start();
        console.log(`Server telah berhasil dijalankan !\nsilahkan masuk pada url berikut => ${server.info.uri}`);
    } catch (error) {
        console.error('Maaf terjadi kesalahan pada saat menjalankan server:', error);
        process.exit(1);
    }
};

init();