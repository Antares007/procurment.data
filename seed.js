var Tree = require('/home/arakela/projects/procurment/tesli/tree').Tree,
  Blob = require('/home/arakela/projects/procurment/tesli/blob').Blob;

module.exports = function(ფესვი_ხე){

  return ფესვი_ხე
    .გამოარჩიე('tenders')
    .გადააწყე(function(buffer, path){
      var tender = parseTender(buffer);
      var id = tender.id = parseInt(path.split(/\.|\//).slice(0, 2).join(''), 10);
      this.emit(tender.id, tender);
    });

  var ტენდერების_ხე = ფესვი_ხე
    .გამოარჩიე('tenders')
    .გადააწყე(function(path, buffer){
        var tender = parseTender(buffer);
        var id = tender.id = parseInt(path.split(/\.|\//).slice(0, 2).join(''), 10);
        this.emit(tender.id, tender);
    })
    .ამოკრიბე(2, function(tenders){

    })
  
  .გაზარდე(ტენდერების_ხის_თესლი);

  return ტენდერების_ხე;
};

function ტენდერში(){

}

function ტენდერის_ნომრების_მიხედვით(){
  var tender = JSON.parse(buffer.toString());
  this.emit(('000000' + tender.id).slice(-6), new Buffer(JSON.stringify(tender)));
}

function ტენდერების_ხის_თესლი(oldRoot, newRoot, oldTree){
  return oldTree.cd(function(){
    oldRoot = oldRoot.get('tenders', new Tree());
    newRoot = newRoot.get('tenders');



    this.d = new Tree(async (git) => {

      // git.diffTree(await oldRoot.getSha(git), await newRoot.getSha(git))
      //   .map(x => JSON.stringify(x) + '\n')
      //   .valueOf()
      //   .pipe(process.stdout);

      console.log('აქ ვარ აქ');

      
      return Tree.emptySha;
    });


    this.a = Blob.of('hello');
  });
}
