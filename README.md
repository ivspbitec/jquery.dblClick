# jquery.dblClick
Provide click or dblclick callback function
1.0
Internet technologies ltd. 2017
info@spbitec.ru
http://spbitec.ru/

## Description

There is an error when the click event is triggered twice when double-clicking, we solved the problem by creating a small plug-in

## Dependencies

jQuery 1.8+

## Example

<script async src="//jsfiddle.net/iv_spbitec_ru/72974p7b/embed/"></script>

```javascript
   $('.button').dblClick(function(e){
      click_function.apply(this); 
   },function(e){
      dblclick_function.click();
   })
```
