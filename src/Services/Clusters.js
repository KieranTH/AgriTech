const db = require('./db');
const config = require('../config');

async function getMultiple(){
  const rows = await db.query(
    "SELECT * FROM clusters"
  );
  //console.log(rows);
  return {
    rows
  }
}

async function create(cluster){
  const result = await db.query(
    `INSERT INTO clusters
    (idclusters, clusterName, clusterIconURL)
    VALUES
    (?, ?, ?)`,
    [
      cluster.id, cluster.name,
      cluster.iconURL
    ]
  );

  let message = 'Error in creating cluster';

  if (result.affectedRows) {
    message = 'Cluster created successfully';
  }

  return {message};
}

async function update(id, cluster){
  const result = await db.query(
    `UPDATE clusters
    SET clusterName=?, clusterIconURL=?
    WHERE idclusters=?`,
    [
      cluster.name,
      cluster.iconURL,
      id
    ]
  );

  let message = 'Error in updating cluster';

  if (result.affectedRows) {
    message = 'Cluster updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM clusters WHERE idclusters=?`,
    [id]
  );

  let message = 'Error in deleting cluster';

  if (result.affectedRows) {
    message = 'cluster deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}
