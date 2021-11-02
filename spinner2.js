const cursor = ["|","/","-","\\","|","/","-","\\","|",,"/"]

for(let i in cursor) {
  setTimeout(() => {
    process.stdout.write(`\r${cursor[i]}   `);
  }, (i*200)+100);
}
