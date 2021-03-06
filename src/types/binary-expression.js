class BinaryExpression {
  constructor(token, params) {
    this.token = token;
    this.type = BinaryExpression.type;
    this.operator = token.value;
    this.left = params.left;
    this.right = params.right;
  }

  parse() {
    return {
      type: this.type,
      operator: this.operator,
      left: this.left.parse(),
      right: this.right.parse()
    };
  }
}

BinaryExpression.type = 'BinaryExpression';

module.exports = BinaryExpression;
