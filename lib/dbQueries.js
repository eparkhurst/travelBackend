var knex = require('../db/knex')

var queries  = {
  getBlogs:  function(){
    return knex('locations')
    .leftJoin('blogs','locations.id','=','blogs.location_id')
  },
  addBlog: function(blog){
    return knex('locations')
      .returning('id')
      .insert({
        lat:blog.location.lat,
        lng:blog.location.lng
      }).then(function(id){
        return knex('blogs')
        .insert({
          text:blog.text,
          title:blog.title,
          location_id:id[0]
        })
      })
  }
}

module.exports = queries;
