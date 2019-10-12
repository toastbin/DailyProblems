import java.util.ArrayList;
import java.util.List;

public class Testt1 {

	public static void main(String[] args) {
		TreeNode t1 = new TreeNode(3);
		t1.left = new TreeNode(9);
		t1.right = new TreeNode(20);
		t1.right.left = new TreeNode(15);
		t1.right.right = new TreeNode(7);
		
		List<List<Integer>> list = levelOrder(t1);
		System.out.println(list);
	}
	
	public static List<List<Integer>> levelOrder(TreeNode root) {
		List<List<Integer>> llt = new ArrayList<List<Integer>>();
		List<TreeNode> ts = new ArrayList<TreeNode>();
		List<TreeNode> temp = new ArrayList<TreeNode>();
		List<Integer> ls = new ArrayList<Integer>();
		if(root != null) {
			ls.add(root.val);
			ts.add(root);
			llt.add(ls);
		}else {
			return llt;
		}
		while(!ts.isEmpty()){
			ls = new ArrayList<Integer>();
			for (TreeNode Node : ts) {
				if(Node.left != null) {
					temp.add(Node.left);
					ls.add(Node.left.val);
				}
				if(Node.right != null) {
					temp.add(Node.right);
					ls.add(Node.right.val);
				}
			}
			ts = temp;
			temp = new ArrayList<TreeNode>();
			if(!ls.isEmpty()) {
				llt.add(ls);
				ls = new ArrayList<Integer>();//此处一开始我使用的是clear，因为这里传入的是地址，会导致之前加入的list也会清空。
			}
		}
		return llt;
    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { 
    	val = x; 
    }
}
