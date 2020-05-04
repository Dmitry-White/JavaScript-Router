const options = {
  mode: "history",
};

const router = new Router(options);
console.log("Init: ", router);

// router.add('/user', () => {
//   console.log('User!');
// })
// console.log('Add: ', router);

// router.add('/profile', () => {
//   console.log('Profile!');
// })
// console.log('Add: ', router);

// router.add('/user');
// console.log('Remove: ', router);

// router.flush();
// console.log('Flush: ', router);

router.getFragment();
