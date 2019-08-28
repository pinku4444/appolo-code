import {UPDATE_USER} from '../../subscription';

const Mutation = {
    createUser: async (parent, args, { dataSources,pubSub },info) => {
        const data = await dataSources.userAPI.createUser(args.data);
        return data;

    },
    updateUser : async(parent, args, {dataSources,pubSub},info) => {
        const {id,data} = args;
        const userData = await dataSources.userAPI.updateUser(id,data);
        pubSub.publish(UPDATE_USER,{
            updateUser : {
                ...userData
            }
        })
        return userData;
    },
    deleteUser: async (parent, args, {dataSources},info) => {
        const { id } = args;
        const data = await dataSources.userAPI.deleteUser(id);
        return data;
    },
    loginUser: async (parent, args, {dataSources},info) => {
        const {email,password} = args.data;
        const data = await dataSources.userAPI.loginUser({email,password});
        return data;
    }
}

export default Mutation;