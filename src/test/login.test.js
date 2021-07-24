import react from 'react'
import adapter from 'enzyme-adapter-react-16'
import {shallow,configure} from 'enzyme'
import Login from '../component/login'

configure({
    adapter:new adapter()
})

describe('Testing the Login component',function(){
        it('Testing the intialization', function(){
            try{    const wrapper=shallow(<Login/>)
            }catch(error){
                fail()
            }
        })          
        it('Testing the number of input tags', function(){
            try{    const wrapper=shallow(<Login></Login>)
                    let len=wrapper.find('input').length
                    expect(len).toBe(3);
            }catch(error){
                fail()
            }
        })
        it('Testing the number of heading tags', function(){
            try{    const wrapper=shallow(<Login></Login>)
                    let len=wrapper.find('h2').length
                    expect(len).toBe(1);
            }catch(error){
                fail()
            }
        })
        it('To check the content of h2 tag',function(){
            try{
                const wrapper=shallow(<Login></Login>)
                //shallow -> It basically mounts the component
                let message=wrapper.find('h2').at(0).text
                expect(message).toEqual('Login')
            }catch(error){
                fail()
            }
        })
})
