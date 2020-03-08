let recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  let newObj = Object.assign(
    {},
    obj,
    {[key]: value}
    );
  return newObj;
}

functioon destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  
}