export const findByTestAttr = (wrapper, attrVal) => {
    return wrapper.find(`[data-test="${attrVal}"]`);
}