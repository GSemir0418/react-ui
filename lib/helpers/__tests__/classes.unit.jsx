import classes from '../classes'
// describe('classes', () => {
//   it('接受一个className', () => {
//     const result = classes('a')
//     expect(result).toEqual('a')
//   })
//   it('接受2个className', () => {
//     const result = classes('a', 'b')
//     expect(result).toEqual('a b')
//   })
//   it('接受undefined，结果不会出现undefined', () => {
//     const result = classes('a', undefined)
//     expect(result).toEqual('a')
//   })
//   it('接受多种类型的className', () => {
//     const result = classes('a', '中文', false, null)
//     expect(result).toEqual('a 中文')
//   })
//   it('接受0个参数', () => {
//     const result = classes()
//     expect(result).toEqual('')
//   })

// })
describe('classes',()=>{
  it('接受字符串或对象或字符串数组',()=>{
    const className='customClass'
    const disabled = true
    const ghost = false
    const theme = 'theme1'
    expect(classes('layout','')).toEqual('gsq-layout')
    expect(classes('layout','header')).toEqual('gsq-layout-header')
    expect(classes('button','',[className])).toEqual('gsq-button customClass')
    expect(classes('button','',[className],{disabled,ghost})).toEqual('gsq-button customClass disabled')
    expect(classes('button','',[className,'ripple'])).toEqual('gsq-button customClass ripple')
    expect(classes('button','header',[className,'ripple'])).toEqual('gsq-button-header customClass ripple')
    expect(classes('button',`${theme}`,[className,'ripple'])).toEqual('gsq-button-theme1 customClass ripple')
    expect(classes('button','header',`${theme}`,[className,'ripple'])).toEqual('gsq-button-header-theme1 customClass ripple')
  })
})