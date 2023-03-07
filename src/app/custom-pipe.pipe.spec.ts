import { CustomPipePipe } from './custom-pipe.pipe';

describe('CustomPipePipe', () => {

  const pipe = new CustomPipePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('test that transform return number after multiply it by it self',function(){
    expect(pipe.transform(5)).toEqual(25)
  })

 it('test that transform return not a number if take non numeric parameter',function(){
   expect(pipe.transform('amira')).toEqual('Not a number')
 })

});


