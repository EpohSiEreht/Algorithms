// Invert a binary tree

var invertTree = function(root) {
    if(root === null){
        return root;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    var left = invertTree(root.left);
    var right = invertTree(root.right);
    return root;
};