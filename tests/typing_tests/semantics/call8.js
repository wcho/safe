/*******************************************************************************
    Copyright (c) 2012, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
 ******************************************************************************/

function foo() {
	return 10;
};

var bar = foo;
foo();

var __result1 = bar();
var __expect1 = 10;
