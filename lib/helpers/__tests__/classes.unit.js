import classes from '../classes'
describe('classes', () => {
  it('接受一个className', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it('接受2个className', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })
  it('接受undefined，结果不会出现undefined', () => {
    const result = classes('a', undefined)
    expect(result).toEqual('a')
  })
  it('接受多种类型的className', () => {
    const result = classes('a', '中文', false, null)
    expect(result).toEqual('a 中文')
  })
  it('接受0个参数', () => {
    const result = classes()
    expect(result).toEqual('')
  })

})