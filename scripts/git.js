




window.addEventListener('hashchange', function() {
    var hash = window.location.hash.replace(/#/g, '');
    read(hash)
    }, false);
    
    
    
    
    
    
      const $ = id => document.getElementById(id);
    let oid;
      let worker = new Worker("./worker.js");
      const portal = new MagicPortal(worker);
      // worker.addEventListener("message", ({ data }) => console.log(data));
    
      const mainThread = {
    
        async progress(evt) {
        console.log(evt);
          $("progress-txt").textContent = evt.phase;
          $("progress").value = evt.total ? evt.loaded / evt.total : 0.5;
          return;
        },
        async fill(url) {
          let username = window.prompt("Username:");
          let password = window.prompt("Password:");
          return { username, password };
        },
        async rejected({ url, auth }) {
          window.alert("Authentication rejected");
          return;
        }
      };
      portal.set("mainThread", mainThread, {
        void: ["print", "progress", "rejected"]
      });
    
      async function doCloneAndStuff() {
        // $("log").textContent = "CLONE:\n";
    
        await workerThread.setDir("/");
    
        await workerThread.clone({
          corsProxy: "https://cors.isomorphic-git.org",
          url: "https://github.com/"+$("repository").value
        });
    
        let branches = await workerThread.listBranches({ remote: "origin" });
        

    
    
      var obj={"files":{}}  
        
        let files = await workerThread.listFiles({});
    
      let image = "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/";
        
    files.forEach(file => obj.files[file]={"content":"hi"});
        var stringified=JSON.parse(JSON.stringify(obj));
        
    const options = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: stringified
    };
    console.log(options)
    fetch('https://codesandbox.io/api/v1/sandboxes/define', options)
      .then(response => response.json())
      .then(response => console.log(response.sandbox_id))
      .catch(err => console.error(err));
    
        
    files.forEach(file => 
    $("commit").innerHTML +=  `<div  class="file-container" onclick="window.location.hash='${file}'">
    <img src="${image + file.split('.')[file.split('.').length -1]+'.svg'}" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/file.svg';"
    />
    ${file}</div>`      
    );
    
    
        
        let commits = await workerThread.log({});
        
        
        commits.forEach(commit => 
    console.log(commit)  
    );
    commits.forEach(function(commit){
    if (oid === undefined){
      oid = commit.oid;
      document.cookie = "oid="+oid;
    }
    else{
    
    }
    }
    );

    
         var hash = window.location.hash.replace(/#/g, '');
    read(hash)
        
      }
    
    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    
    
     async function read(filepath) {
        var oid = getCookie("oid");
    
        await workerThread.setDir("/");
        let read = await workerThread.read({
          oid:oid,
          filepath:filepath,
        });
    var enc = new TextDecoder("utf-8");
    
    console.log(enc.decode(read.blob));
      
      change_value(enc.decode(read.blob));
      
       
      }
    function close_file_content(){
      document.getElementById('file_content').className = 'file_content';
    }
      (async () => {
        const workerThread = await portal.get("workerThread");
    

        $("repository").value = "firescrypt/node-git-backend";
       
    
    
       
    
        window.workerThread = workerThread;
        window.worker = worker;
        // console.log(workerThread);
     doCloneAndStuff();
    
      })();
    
    