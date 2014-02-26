
describe("Task", function(){
  var task = new App.Task({name: 'foo', description: 'bar'})

  it("has and id", function(){
    expect(task.name).toEqual('foo')
  });

})
