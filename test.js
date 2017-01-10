var fs = require("fs");
var request = require("request");

var options = { method: 'POST',
  url: 'http://35.154.109.51:4002/learning/curriculum/create',
  headers:
   { 'postman-token': '8873965e-065a-08a6-3b4b-bb1bc3697d42',
     'cache-control': 'no-cache',
     'content-type': 'application/json',
     'x-email-id': 'balakrishnan@britindia.com',
     'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODQzMTMxODU4NzN9.e7d7SMpDALz28Lb4OaZDr9IVif0bb_wzGLgAm3XM3XE',
     organization: 'britannia',
     'x-device-id': '11324' },
  body:
   { curriculumName: 'Communication Skill',
     description: 'Communication skill is a must curriculum for all',
     preRequisite:
      { value: fs.createReadStream("filelist.md", { encoding: 'base64' }),
        options: { filename: 'Data Communications CW.pdf', contentType: null } },
     mandatoryFunction: [ 'MF1', 'MF2' ],
     recommendedFunction: [ 'RF1', 'RF2' ],
     complianceFor: [ 'CF1', 'CF2' ],
     managerApproval: 'true',
     workFlowApproval: '2000',
     workFlowApprovalUnit: 'INR',
     costPerEmployee: '15000',
     costPerEmpUnit: 'INR',
     certificateTemplate: 'FeedBack Form',
     certificateValidity: 'true',
     validityInMonths: '10',
     certificationType: 'Permanent',
     evaluationForm: 'EV1',
     feedbackForm: 'FB1',
     emailTemplate:
      { value: fs.createReadStream("pc2v9AdminGuide.pdf", { encoding: 'base64' }),
        options: { filename: 'onlinejudge.pdf', contentType: null } },
     manualMailTrigger: 'true',
     courses: [ 'CR1', 'CR2', 'CR3' ] },
  json: true };

request(options, function (error, response, body) {
  if (error)
  console.log(error);

  console.log(body);
});
