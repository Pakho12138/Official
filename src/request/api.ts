import service from "./http";

export const Api = {
    home: {
        getHomeData: (data?: any) => service.post('/home', data),
    },
}