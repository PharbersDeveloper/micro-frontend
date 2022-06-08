## 查找和替换值
该处理器在指定列或所有列中执行字符串替换。

数值范围的边界包括在内。如果该列不包含行的有效数值，则该行被视为超出范围。

### 匹配模式
通过设置替换模式，您可以指定是否要执行查找/替换：

- "完全匹配"：替换完整的单元格值（例如：将 'average' 替换为 'medium'）
- "包含" ：替换单元格中所有出现的字符串。 （例如：将 ':' 替换为 '-'）
- "正则表达"：替换正则表达式的匹配项

###多次替换

查找/替换支持多个替换：可以在同一个单元格上一个接一个地应用多个替换。
- 单列
- 列的显式列表
- 多列

在以下情况下，您可以选择是否将该行视为匹配：
- 所有列都匹配
- 或者，至少有一列匹配

### 正则表达式

正则表达式匹配支持组捕获。使用 $index 表示法引用组

例如，如果您的单元格包含 val-17-x 并且您想要获得 V17，您将使用从 val-([0-9]*)-.* 到 V$1 的替换