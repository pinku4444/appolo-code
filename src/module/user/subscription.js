import {UPDATE_USER} from '../../subscription'
const Subscription = {
    updateUser: {
        subscribe(parent, args, {pubSub}, info) {
            return pubSub.asyncIterator(UPDATE_USER);
        }
    }
}


export default Subscription;