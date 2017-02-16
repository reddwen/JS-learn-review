//关于优先队列的实现

/*
 * 算法实现要求
 * 根据元素的优先级，在正确的位置添加元素
 * 用于医院排队，更具病人严重情况放号
 */

function PriorityQueue(){
	var items = [];
	function QueueElement (element,priority){
		this.element = element;
		this.priority = priority;
	}
	this.enqueue = function(element,priority){
		var queueElement = new QueueElement(element,priority);
		var added = false;
		for(var i = 0; i < items.length ; i++){
			if(queueElement.priority > items[i].priority){
				items.splice(i,0,queueElement);	//当期优先级较高时，选择放入相应位置
				added = true;
				break;
			}
		}
		if( !added){
			items.push(queueElement); 	//当其优先级最低时，推入队尾
		}
	};
	this.dequeqe = function(){
		return items.shift();
	};
	this.front = function(){
		return items[0];
	};;
	this.isEmpty = function(){
		return items.length == 0 ;
	};
	this.size = function(){
		return items.length;
	};
	this.print = function(){
		var severity_level = {
			"1":"不严重",
			"2":"一般严重",
			"3":"较为严重",
			"4":"非常严重"
		}
		for( var i = 0 ; i< items.length;i++){
			console.log( items[i].element +"------"+ severity_level[items[i].priority]);
		}
	};
}

var  priorityQueue = new PriorityQueue();
 priorityQueue.enqueue("John", 2);
 priorityQueue.enqueue("Jack", 1);
 priorityQueue.enqueue("Camila", 1);
 priorityQueue.enqueue("tom", 4);
 priorityQueue.enqueue("peter", 3);
 priorityQueue.print(); 