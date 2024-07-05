import { json } from 'stream/consumers'
import * as user from '../controllers/authController'
describe('user handler',()=>{
it('should create a new user', async ()=>{
    const req={body:{username:'hello',password:'hi'}}
    const res={json({token}){
        expect(token).toBeTruthy()
    }}
    await user.createNewUser(req,res,()=>{})
})

})