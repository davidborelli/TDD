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
  let fetchedStub = "";

  beforeEach(() => {
    fetchedStub = sinon.stub(global, "fetch");
  });

  afterEach(() => {
    fetchedStub.restore();
  });

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
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it("should call fetch with the correct URL", () => {
      context("passing one type", () => {
        const artists = search("Slipknot", "artist");

        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Slipknot&type=artist"
        );

        const albums = search("Slipknot", "album");
        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Slipknot&type=album"
        );
      });

      context("passing more then one type", () => {
        const artistAndAlbums = search("Slipknot", ["artist", "album"]);

        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Slipknot&type=artist,album"
        );
      });
    });
  });
});
