let recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  let newObj = Object.assign(
    {},
    obj,
    {[key]: value}
    );
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return obj[key] = value;
}