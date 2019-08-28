/*eslint-disable*/
function toTreeDate(
	data = [],
	name = "name",
	attribute = { parentId: "parentId", id: "id", child: "children" }
) {
	// 还有个child的定义，自己扩展下
	// 另外有个lodash的工具类好好了解下，基本没必要自己去写utils的情况
	// 没有树形结构的数据，没有对应id，直接返回原数据
	let hasId = false;
	let nodes = data.map(row => {
		if (row[attribute.id]) {
			hasId = true;
		}
		return Object.assign(row, {
			_id: row[attribute.id],
			_pid: row[attribute.parentId],
			label: row[name]
		});
	});
	if (!hasId) {
		return data;
	}
	// 构建树
	let cache = {};
	let treeCache = {};
	let create = function (nodes, _pid, _name, depth = 0) {
		let result = [];
		let len = nodes.length;

		if (_pid) {
			if (treeCache[_pid]) {
				for (let i = 0; i < treeCache[_pid].length; i++) {
					let node = treeCache[_pid][i];
					node.depth = depth;
					node.parentName = _name;
				}
				result = treeCache[_pid];
			}
		} else {
			// 转哈希方便索引
			nodes.forEach(node => {
				cache[node._id] = true;
				if (!treeCache[node._pid]) {
					treeCache[node._pid] = [];
				}
				treeCache[node._pid].push(node);
			});
			// 如果_pid不在当前列表中，则认为是根节点，存到结果集，并且从node列表移除
			for (let i = 0; i < len; i++) {
				let node = nodes[i];
				if (!cache[node._pid]) {
					node.depth = depth;
					result.push(node);
				}
			}
		}
		// 递归子节点
		result.forEach(node => {
			node[attribute.child] = create(nodes, node._id, node.name, node.depth + 1);
			node.childNum = node[attribute.child]
				? node[attribute.child].length
				: 0;
		});
		return result.length > 0 ? result : "";
	};
	let result = create(nodes) || [];
	return result;
}

export {
	toTreeDate
} 