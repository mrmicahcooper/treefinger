
describe("Task", function(){
  var task = new App.Task({name: 'foo', description: 'bar'})

  it("Has and id", function(){
    expect(task.name).toEqual('foo')
  });

})
