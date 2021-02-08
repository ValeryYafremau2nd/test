const Cloudworker = require("@dollarshaveclub/cloudworker");
const fs = require("fs");
const path = require("path");

const { expect } = require("chai");

const workerScript = fs.readFileSync(
  path.resolve(__dirname, "../../dist/worker.js"),
  "utf8"
);

describe("unit test", function () {
  before(() => {
    worker = new Cloudworker(workerScript);
  });
  it("get /api/test", async () => {
    const req = new Cloudworker.Request("https://test/api/test");
    const res = await worker.dispatch(req);
    expect(res.status).to.eql(200);
  });
});
