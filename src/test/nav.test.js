import react from 'react'
import adapter from 'enzyme-adapter-react-16'
import {shallow,configure} from 'enzyme'
import Nav from '../component/nav'

configure({
    adapter:new adapter()
})

describe('Testing the nav component',function(){
        it('Testing the intialization', function(){
            try{    const wrapper=shallow(<Nav></Nav>)
            }catch(error){
                fail()
            }
        })          
        it('Testing the number of anchor tags', function(){
            try{    const wrapper=shallow(<Nav></Nav>)
                    let len=wrapper.find('a').length
                    expect(len).toBe(4);
            }catch(error){
                fail()
            }
        })
        it('Testing the number of heading tags', function(){
            try{    const wrapper=shallow(<Nav></Nav>)
                    let len=wrapper.find('h1').length
                    expect(len).toBe(1);
            }catch(error){
                fail()
            }
        })
})
