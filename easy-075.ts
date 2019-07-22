const mathExpressionToC = (expression: string): string => {
	const [leftHand, rightHand] = expression.split("=");
	const [funcName, args] = leftHand.split("(");
	const argsArr = args.split(",").map(el => `float ${el.replace(")", "")}`);

	const formattedLeftHand = `float ${funcName}(${argsArr.join(", ")})`;
	const formattedRightHand = `return ${rightHand
		.replace(/(exp|log|sqrt|abs|sin|cos|tan)/g, "$&f")
		.replace(/absf/g, "fabsf")}`;

	return `${formattedLeftHand}
{
	${formattedRightHand}
}`;
};

console.log(mathExpressionToC("big(x,y)=2.0*x + cos(y)"));
console.log(mathExpressionToC("L0(x,y)=abs(x)+abs(y)"));
console.log(mathExpressionToC("f(x)=x*x"));
console.log(mathExpressionToC("big(x,y)=sqrt(x+y)*10"));
console.log(mathExpressionToC("big(x,y)=sqrt(x+y)+abs(10)"));
