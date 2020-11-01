// # 7. 重建二叉树
//
// ## 题目链接
//
//   [牛客网](https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6?tpId=13&tqId=11157&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github)
//
// ## 题目描述
//
// 根据二叉树的前序遍历和中序遍历的结果，重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// function TreeNode(x) {
//   this.val = x;
//   this.left = null;
//   this.right = null;
// }
// function reConstructBinaryTree(pre, vin)
// {
//   // write code here
//   if (!pre || !pre[0]) return null
//   let root = pre[0];
//   let TreeNode = {
//     val: root
//   }
//   if (pre[0] !== vin[0]) {
//     let vinMid = vin.indexOf(pre[0]);
//     let leftVin = vin.slice(0, vinMid);
//     let rightVin = vin.slice(vinMid + 1);
//     let leftPre = pre.slice(1, leftVin.length + 1);
//     let rightPre = pre.slice(leftVin.length + 1)
//     TreeNode.left = reConstructBinaryTree(leftPre, leftVin)
//     TreeNode.right = reConstructBinaryTree(rightPre, rightVin)
//   }
//   else {
//     TreeNode.left = null;
//     if (pre.length === 1) {
//       return pre[0]
//     }
//     TreeNode.right = reConstructBinaryTree(pre.slice(1), vin.slice(1))
//   }
//   return TreeNode;
// }
//
// console.log(reConstructBinaryTree([1,2,3,4,5,6,7],[3,2,4,1,6,5,7]))

function reConstructBinaryTree(pre, vin)
{
  // write code here
  let root = pre[0];
  let rootIdx = vin.indexOf(root);
  if (rootIdx === -1) {
    return null;
  }
  let leftVin = vin.slice(0, rootIdx);
  let leftLen = leftVin.length
  let leftPre = pre.slice(1, leftLen + 1);
  let rightVin = vin.slice(rootIdx + 1);
  let rightPre = pre.slice(leftLen + 1)
  let TreeNode = {
    val: root,
    left: reConstructBinaryTree(leftPre, leftVin),
    right: reConstructBinaryTree(rightPre, rightVin),
  }
  return TreeNode
}
