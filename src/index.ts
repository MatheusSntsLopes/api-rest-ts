import { server } from './server/server';


server.listen(process.env.PORT, () => console.log('listening on port'));
