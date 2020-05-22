import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require("node-fetch");

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from "../src/main";

describe("Spotify Wrapper", () => {
  describe("Smoke Tests", () => {
    it("should exist the search method", () => {
      expect(search).to.exist;
    });

    it("should exist the search method", () => {
      expect(searchAlbums).to.exist;
    });

    it("should exist the search method", () => {
      expect(searchArtists).to.exist;
    });

    it("should exist the search method", () => {
      expect(searchTracks).to.exist;
    });

    it("should exist the search method", () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe("Generic Search", () => {
    it("should call fetch function ", () => {
      const fetchedStub = sinon.stub(global, "fetch");
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;

      fetchedStub.restore();
    });

    it("should receive the correct url to fetch", () => {
      const fetchedStub = sinon.stub(global, "fetch");
      const artists = search("Slipknot", "artist");

      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Slipknot&type=artist"
      );

      const albums = search("Slipknot", "album");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Slipknot&type=album"
      );
    });
  });
});
