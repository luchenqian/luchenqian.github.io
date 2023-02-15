---
title: 数据类型
sidebar_position: 1
last_update:
  date: 2023/02/08
  author: 卢辰倩
---

# JS 数据类型

## JS 的数据类型有哪些?

- 基本数据类型（值类型）：Number、String、Boolean、Null、Undefined、Symbol、BigInt。保存在栈内存中。
- 复杂数据类型（引用类型）：Object、Function、Array RegExp Date 基本包装类型及单体内置对象(Global、Math)等。

**基本数据类型保存在栈里面，可以直接访问它的值；引用数据类型保存在堆里面，栈里面保存的是地址，通过栈里面的地址去访问堆里面的值。**

## 如何判断 JS 的数据类型？

1. typeof

    `typeof`可以区分除了`Null`类型以外的其他基本数据类型，以及从对象类型中识别出函数（function）。

    其返回值有：`number`、`string`、`boolean`、`undefined`、`symbol`、`bigint`、`function`、`object`。

    其中, `typeof null`返回 `"object"`

    如果要识别`null`，可直接使用`===`全等运算符来判断。

   ```
    typeof 1 // 'number'
    typeof '1' // 'string'
    typeof true // 'boolean'
    typeof undefined // 'undefined'
    typeof Symbol() // 'symbol'
    typeof null // 'object'
    typeof [] // 'object'
    typeof {} // 'object'
    typeof console // 'object'
    typeof console.log // 'function'
   ```
2. instanceof

    `instanceof`一般是用来判断引用数据类型，但不能正确判断基本数据类型，根据在原型链中查找判断当前数据的原型对象是否存在返回布尔类型。

    ```
    1 instanceof Number; // false
    true instanceof Boolean; // false
    'str' instanceof String; // false
    [] instanceof Array; // true
    function(){} instanceof Function; // true
    {} instanceof Object; // true
    let date = new Date();
    date instance of Date; // true
    ```
3. Object.prototype.toString

    ```
    Object.prototype.toString({}) // "[object Object]"
    Object.prototype.toString.call({}) // 同上结果，加上call也ok
    Object.prototype.toString.call(1) // "[object Number]"
    Object.prototype.toString.call('1') // "[object String]"
    Object.prototype.toString.call(true) // "[object Boolean]"
    Object.prototype.toString.call(function () {}) // "[object Function]"
    Object.prototype.toString.call(null) //"[object Null]"
    Object.prototype.toString.call(undefined) //"[object Undefined]"
    Object.prototype.toString.call(/123/g) //"[object RegExp]"
    Object.prototype.toString.call(new Date()) //"[object Date]"
    Object.prototype.toString.call([]) //"[object Array]"
    Object.prototype.toString.call(document) //"[object HTMLDocument]"
    Object.prototype.toString.call(window) //"[object Window]"
    ```
4. Array.isArray

    `Array.isArray(value)`可以判断 value 是否为数组。

    ```
    Array.isArray([]); // true
    Array.isArray({}); // false
    Array.isArray(1); // false
    Array.isArray('string'); // false
    Array.isArray(true); // false
    ```

## null 和 undefined 的区别？

- `null`表示一个对象被定义了，值为“空值”。用法：
    ① 作为函数的参数，表示该函数的参数不是对象。
    ② 作为对象原型链的终点。

- `undefined`表示不存在这个值。就是此处应该有一个值，但是还没有定义，当尝试读取时就会返回 undefined。用法：
    ① 函数没有返回值时，默认返回 undefined。
    ② 变量已声明，没有赋值时，为 undefined。
    ③ 对象中没有赋值的属性，该属性的值为 undefined。
    ④ 调用函数时，应该提供的参数没有提供，该参数等于 undefined。

## == 和 === 的区别？

- `==`：两个等号称为等值符，当等号两边的值为相同类型时比较值是否相同，类型不同时会发生类型的自动转换，转换为相同的类型后再做比较。

- `===`：三个等号称为等同符，当等号两边的值为相同类型时，直接比较等号两边的值，值相同则返回 true；若等号两边值的类型不同时直接返回 false。也就是三个等号既要判断类型也要判断值是否相等。




