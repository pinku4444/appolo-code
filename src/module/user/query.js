const Query = {
    me : async (parent, args, { dataSources },info) => {
        const data = await dataSources.userAPI.me();
        console.log('data: ', data);
        return data;
    },
    users : async (parent, args, {dataSources}, info) => {
        const data = await dataSources.userAPI.fetchUsers();
        return data;

    }
}


export  {Query};