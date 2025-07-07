//promises

let promises = new Promise((res, rej) => {
  let success = true;
  if (success) {
    res("success");
  } else {
    rej("fail");
  }
});

promises.then((res) => console.log(res)).catch((err) => console.log(err));


