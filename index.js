const options = {
  mode: "history",
};

const router = new Router(options);
router.listen();
console.log("Init: ", router);

router.add("/user", () => {
  console.log("User!");
});
console.log("Add: ", router);

router.add("/profile", () => {
  console.log("Profile!");
});
console.log("Add: ", router);

// router.remove('/user');
// console.log('Remove: ', router);

// router.flush();
// console.log('Flush: ', router);

const userButton = document.querySelector("#user");
const profileButton = document.querySelector("#profile");

userButton.addEventListener("click", router.navigateTo);
profileButton.addEventListener("click", router.navigateTo);
