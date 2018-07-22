

describe('interpolate method', function () {

  it('should work for object with one key and one value', function () {
    var result = interpolate("hi my name is {name}", { name: "John" });
    expect(result).to.equal("hi my name is John")
  })

  it('should work for object with multiple key/values', function () {
    var result = interpolate("hi my name is {name} and it is {weather} outside", { name: "John", weather: "damn hot" })
    expect(result).to.equal("hi my name is John and it is damn hot outside")
  })

  it('should work for object with nested object', function () {
    var result = interpolate("hi my name is {contact.name}", { contact: { name: "John" } })
    expect(result).to.equal("hi my name is John")
  })

  it('should work for object with multiple nested objects', function () {
    var result = interpolate("The time is {year.month.day.time}", { year: { month: { day: { time: "2pm" } } } })
    expect(result).to.equal("The time is 2pm")
  })

});
