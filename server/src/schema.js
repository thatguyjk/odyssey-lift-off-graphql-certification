const gql = require("graphql-tag");

const typeDefs = gql`
  # A track is a module that teaches about different topics
  type Track {
    id: ID!
    # The title of this track
    title: String!
    # The tracks author
    author: Author!
    # The thumbnail for the track
    thumbnail: String
    # The total length of the track
    length: Int
    # The number of modules that this track contains
    modulesCount: Int
  }

  # Author of a complete track or module
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    # Get tracks array for homepage grid
    typesForHome: [Track!]!
  }
`;

module.exports = typeDefs;
