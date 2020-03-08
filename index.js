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
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  let newObj = Object.assign(
    {},
    obj
    );
  delete newObj.key;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}