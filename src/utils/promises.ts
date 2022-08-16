const p1 = new Promise((resolve) => {
	setTimeout(() => resolve(8), 1000);
});

const p2 = Promise.resolve(9);

Promise.allSettled([p1, p2]).then((results) =>
	results.forEach((result) =>
		console.log("[ASYNC PROMISE]", result.status.toUpperCase())
	)
);
