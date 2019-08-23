const Query = {
    me : async (parent, args, { dataSources },info) => {
    const me = await dataSources.userAPI.me();
    const { data } = me;
    return data;
    }
}


export  {Query};