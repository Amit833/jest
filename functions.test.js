const functions = require("./functions");

// here i test which function I want to test and what would be the result of test

// beforeEach(() => initDatabase()); // it will initialize before every test
// afterEach(() => closeDatabase()); //it will initialize after every test

// beforeAll(() => initDatabase());  // it will initialize Only one time before all test
// afterAll(() => closeDatabase());   // it will initialize only one time after all test

// const initDatabase = () => console.log("database initialized..");
// const closeDatabase = () => console.log("database closed..");

// if we want to use beforeEach for specific test then we should use
// describe method like down below
const nameCheck = () => console.log("checking name....");

describe("checking names", () => {
  beforeEach(() => nameCheck());

  test("user is ali", () => {
    const user = "ali";
    expect(user).toBe("ali");
  });

  test("user is abu", () => {
    const user = "abu";
    expect(user).toBe("abu");
  });
});

test("add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("add 2 + 2 to not equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy(); // null, 0 , undifined egulo sob falsy
});

test("user should be amit majumder object", () => {
  expect(functions.createUser()).toEqual({ fName: "amit", lName: "majumder" });
});

test("should be under 100", () => {
  const load1 = 10;
  const load2 = 70;

  expect(load1 + load2).toBeLessThan(100);
});

// regular expression
test("should not be any I", () => {
  expect("team").not.toMatch(/I/i); // failed if teamI or teami
});

// array
test("ali should be in users array", () => {
  users = ["ami", "ali", "sad"];

  expect(users).toContain("ali");
});

// working with asynnc await ( first try with promise)

// test("User fatched name should be Patricia Lebsack", () => {
//   expect.assertions(1); // we use it because of promise
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Patricia Lebsack");
//   });
// });

// async await
test("User fatched name should be Patricia Lebsack", async () => {
  expect.assertions(1); // we use it because of async await
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Patricia Lebsack");
});

// we use toBe only for primitive data type otherwise toEqual
