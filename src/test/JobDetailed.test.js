import react from 'react'
import adapter from 'enzyme-adapter-react-16'
import {shallow,configure} from 'enzyme'
import JobDetailedView from '../component/JobDetailed'

configure({
    adapter:new adapter()
})

describe('Testing the Detailed job view component',function(){
        it('Testing the intialization', function(){
            try{    const wrapper=shallow(<JobDetailedView/>)
            }catch(error){
                fail()
            }
        })          
        it('Testing the number of Heading tags', function(){
            try{    const wrapper=shallow(<JobDetailedView></JobDetailedView>)
                    let len=wrapper.find('h4').length
                    expect(len).toBe(4);
            }catch(error){
                fail()
            }
        })
        it('Testing the content of first heading tag', function(){
            try{    const wrapper=shallow(<JobDetailedView></JobDetailedView>)
                    let message=wrapper.find('h4').at(0).text
                    expect(message).toBe('Company Name');
            }catch(error){
                fail()
            }
        })
        
})
