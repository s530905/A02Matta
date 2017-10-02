QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});


QUnit.test('Testing the Simpleinterest function', function (assert) {
    assert.equal(calcSI(100,10,10), 100, "works with a positive number");
});






