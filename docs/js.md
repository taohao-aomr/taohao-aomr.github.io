# JS

## js有几种数据结构

JavaScript中常见的数据结构包括：

数组（Array） ：用于存储多个值的有序集合。
对象（Object） ：用于存储键值对的集合。
字符串（String） ：用于表示文本数据。
数字（Number） ：用于表示数值。
布尔值（Boolean） ：用于表示真或假。
函数（Function） ：用于封装可执行的代码。
Symbol：唯一的、不可变的数据类型，通常用作对象属性的键。
Map：用于存储键值对的集合，可以使用任何数据类型作为键。
Set：用于存储唯一值的集合。

## 如何判断js数据类型

可以使用 typeof 操作符来判断 JavaScript 中的数据类型。例如

```md
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" （注意这是个历史遗留问题）
typeof {}; // "object"
typeof []; // "object" （数组也被认为是对象）
typeof function() {}; // "function"

```

## 讲一下什么是深拷贝浅拷贝

浅拷贝：只复制一层对象的引用，如果对象内部还有对象，则这些内部对象仍然会被多个变量共享。
深拷贝：复制对象所有层级的值，创建一个全新的对象，原对象和拷贝对象互不影响。

### 简单写（说）一下深拷贝。如何避免嵌套循环，比如说第一层有属性是引用的我们外层的

```md
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    
    let copy = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    
    return copy;
}
```

## 讲一下对闭包的理解

闭包是指函数和其相关的引用环境组合的组合体。简单来说，闭包可以访问其声明时所在的词法作用域以外的变量。闭包使得函数内部的变量在函数执行完毕后仍然可以被访问和使用。

## 讲一下对事件循环的理解

事件循环是JavaScript运行时的核心概念之一，它负责处理异步事件。事件循环持续监听执行栈和任务队列，当执行栈为空时，会从任务队列中取出任务并推入执行栈中执行。这个过程会不断循环执行，直到任务队列为空。

## 哪些会进入宏任务哪些会进入微任务

宏任务（Macro Task）：包括整体代码script、setTimeout、setInterval、I/O、UI Rendering等。

微任务（Micro Task）：Promise、process.nextTick等。

然后投屏看实践题，主页是settimeout，promise，process.nextTick几个的执行顺序，以及settimeout嵌套process.nextTick的执行顺序

## 说一下this

在JavaScript中，this 关键字代表当前执行上下文的对象。它的值取决于函数的调用方式。

在函数中，this 的值取决于函数的调用方式：作为对象方法调用时，this 指向该对象；作为普通函数调用时，this 指向全局对象（在浏览器环境中是 window）。
在箭头函数中，this 的值是在定义时确定的，而不是在调用时确定的，它会捕获所在上下文的 this 值。

## 防抖和节流

防抖（Debounce） ：在短时间内多次触发同一事件，只执行最后一次，或者只在开始时执行。常用于输入框输入验证等场景。

节流（Throttle） ：在一段时间内只执行一次事件处理函数。常用于滚动事件、resize事件等频繁触发的事件。

### 手写一下防抖函数

```md
function debounce(func, delay) {
    let timer;
    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

```

## 算法题

### a.合并有序数组输入nums1=[1,2,3,0,0,0]，a=3,b=4,nums2=[2,5,8] 输出：[1,2,2,3,5,8] 要实现合并有序数组，可以使用双指针法，从两个数组的末尾开始比较，依次将较大的元素放入nums1数组的末尾

```md
function mergeSortedArray(nums1, m, nums2, n) {
    let i = m - 1; // nums1的末尾索引
    let j = n - 1; // nums2的末尾索引
    let k = m + n - 1; // nums1的当前插入位置索引

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    // 将nums2中剩余的元素插入到nums1中
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }

    return nums1;
}

// 示例输入
const nums1 = [1, 2, 3, 0, 0, 0];
const a = 3;
const nums2 = [2, 5, 8];
const b = 3;

console.log(mergeSortedArray(nums1, a, nums2, b)); // 输出 [1, 2, 2, 3, 5, 8]

```

### b.计算和，不能使用内置方法进行类型转换，输入是字符串的输出，输出结果字符串，输入a='9',b=‘1’ 输出‘10’ 要实现字符串加法，可以模拟手动进行十进制加法的过程，逐位相加并考虑进位

```md
function addStrings(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0; // 进位标志
    let result = ''; // 结果字符串

    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? parseInt(a[i--]) : 0;
        const digitB = j >= 0 ? parseInt(b[j--]) : 0;
        const sum = digitA + digitB + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    return result;
}

// 示例输入
const a = '9';
const b = '1';

console.log(addStrings(a, b)); // 输出 '10'

```
