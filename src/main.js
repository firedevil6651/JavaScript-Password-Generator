const readline = require('readline');
const chalk = require('chalk');
const copy = require('clipboardy');
const fs = require('fs');
const { copypassword, writeinfile } = require('./config.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();

rl.question('How long do you want your password?\n', function(passwordlength) {

  if (isNaN(passwordlength)) {

    console.log(chalk.red('Please input only numbers!'));
    return;

  } else if (passwordlength < 6) {

    console.log(chalk.red('Please input a number larger than 6 to make your password somewhat secure.'))
    return;
  }

  console.clear();

  rl.question('What characters do you want in you password?\n1. nocaps\n2. caps\n3. numbers\n4. misc\n5. all\n', function(chars) {

      if (chars == '1') {

        console.clear()

        function make1(length) {
          var result = '';
          var characters = 'abcdefghijklmnopqrstuvwxyz';
          var charactersLength = characters.length;
          for ( var i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        }
       
        if (copypassword) {

          var pass = make1(passwordlength + '\n\n\n');

          copy.writeSync(pass)
          console.log(chalk.green('Successfully copied to clipboard!'));

          if (writeinfile) {

            fs.writeFile('passwords.txt', pass + '\n', (err) => {
              if (err) throw err;
              console.log(chalk.green('Successfully written down in passwords.txt!\n(Please note that when you generate a new password and write it in passwords.txt, it will delete any previous password inside, this is intentional)'))
            });

          }

          return;

        } else if (writeinfile) {

          var pass = make1(passwordlength + '\n\n\n');

          fs.writeFile('passwords.txt', pass, (err) => {
            if (err) throw err;
            console.log(chalk.green('Successfully written down in passwords.txt!\n(Please note that when you generate a new password and write it in passwords.txt, it will delete any previous password inside, this is intentional)'))
          });

        } else if (copypassword, writeinfile === false) {

          console.clear;
          console.log(make1(passwordlength + '\n\n\n'))
          return;

        }

      } else if (chars == '2') {

        console.clear()

        function make2(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          var charactersLength = characters.length;
          for ( var i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        }
       
        if (copypassword) {

          var pass = make2(passwordlength + '\n\n\n');

          copy.writeSync(pass)
          console.log(chalk.green('Successfully copied to clipboard!'));

          if (writeinfile) {

            fs.writeFile('passwords.txt', pass + '\n', (err) => {
              if (err) throw err;
              console.log(chalk.green('Successfully written down in passwords.txt!\n(Please note that when you generate a new password and write it in passwords.txt, it will delete any previous password inside, this is intentional)'))
            });

          }

          return;

        } else if (writeinfile) {

          var pass = make2(passwordlength + '\n\n\n');

          fs.writeFile('passwords.txt', pass, (err) => {
            if (err) throw err;
            console.log(chalk.green('Successfully written down in passwords.txt!\n(Please note that when you generate a new password and write it in passwords.txt, it will delete any previous password inside, this is intentional)'))
          });

        } else if (copypassword, writeinfile === false) {

          console.clear;
          console.log(make2(passwordlength + '\n\n\n'))
          return;

        }

      } else if (chars == '3') {

        console.clear()

        function make3(length) {
          var result = '';
          var characters = '0123456789';
          var charactersLength = characters.length;
          for ( var i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        }
       
        if (copypassword) {

          var pass = make3(passwordlength + '\n\n\n');

          copy.writeSync(pass)
          console.log(chalk.green('Successfully copied to clipboard!'));

          if (writeinfile) {

            fs.writeFile('passwords.txt', pass + '\n', (err) => {
              if (err) throw err;
              console.log(chalk.green('Successfully written down in passwords.txt!\n(Please note that when you generate a new password and write it in passwords.txt, it will delete any previous password inside, this is intentional)'))
            });

          }

          return;

        } else if (writeinfile) {

          var pass = make3(passwordlength + '\n\n\n');

          fs.writeFile('passwords.txt', pass, (err) => {
            if (err) throw err;
            console.log(chalk.green('Successfully written down in passwords.txt!\n(Please note that when you generate a new password and write it in passwords.txt, it will delete any previous password inside, this is intentional)'))
          });

        } else if (copypassword, writeinfile === false) {

          console.clear;
          console.log(make3(passwordlength + '\n\n\n'))
          return;

        }

      } else if (chars == '4') {

        console.clear()

        function make4(length) {
          var result = '';
          var characters = '_!@#$%&*-`~';
          var charactersLength = characters.length;
          for ( var i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        }
       
        if (copypassword) {

          var pass = make4(passwordlength + '\n\n\n');

          copy.writeSync(pass)
          console.log(chalk.green('Successfully copied to clipboard!'));

          if (writeinfile) {

            fs.writeFile('passwords.txt', pass + '\n', (err) => {
              if (err) throw err;
              console.log(chalk.green('Successfully written down in passwords.txt!\n(Please note that when you generate a new password and write it in passwords.txt, it will delete any previous password inside, this is intentional)'))
            });

          }

          return;

        } else if (writeinfile) {

          var pass = make4(passwordlength + '\n\n\n');

          fs.writeFile('passwords.txt', pass, (err) => {
            if (err) throw err;
            console.log(chalk.green('Successfully written down in passwords.txt!\n(Please note that when you generate a new password and write it in passwords.txt, it will delete any previous password inside, this is intentional)'))
          });

        } else if (copypassword, writeinfile === false) {

          console.clear;
          console.log(make4(passwordlength + '\n\n\n'))
          return;

        }

      } else if (chars == '5') {

        console.clear();

        function make5(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_!@#$%&*-`~';
          var charactersLength = characters.length;
          for ( var i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        }

        if (copypassword) {

          var pass = make5(passwordlength + '\n\n\n');

          copy.writeSync(pass)
          console.log(chalk.green('Successfully copied to clipboard!'));

          if (writeinfile) {

            fs.writeFile('passwords.txt', pass + '\n', (err) => {
              if (err) throw err;
              console.log(chalk.green('Successfully written down in passwords.txt!\n(Please note that when you generate a new password and write it in passwords.txt, it will delete any previous password inside, this is intentional)'))
            });

          }

          return;

        } else if (writeinfile) {

          var pass = make5(passwordlength + '\n\n\n');

          fs.writeFile('passwords.txt', pass, (err) => {
            if (err) throw err;
            console.log(chalk.green('Successfully written down in passwords.txt!\n(Please note that when you generate a new password and write it in passwords.txt, it will delete any previous password inside, this is intentional)'))
          });

        } else if (copypassword, writeinfile === false) {

          console.clear;
          console.log(make5(passwordlength + '\n\n\n'))
          return;

        }

      } else {
        console.log(chalk.red('Please input one of the options listen above!'));
        return;
      }

  });
});